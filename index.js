const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const searchYoutube = require('youtube-api-v3-search');
const contentDisposition = require('content-disposition');
const app = express();
const port = process.env.PORT || 4000;
const db = require('./db');
const statisticRoutes = require('./routes');

require('dotenv').config();

const reqOptions = {
  requestOptions: {
    headers: {
      Cookie:
        'Consent=YES+yt.425338209.en+FX+615; VISITOR_INFO1_LIVE=Mn0b1ESEgM8; YSC=2vRdTHT8FZg; NID=511=e-xaB7j2tLsIpNgpwGjmSLf09IdE2xaDkFtTwaUyLiTgFu_XGwPHh5QjDvkYFSOIz9bQMl5xcOvQl92IPM9Lx2zQ6h6U4nzMt9nkBKA8hPC2j2VqEtdz175ZPj_tsDhk3p4b7ylOQEn7CNlnEDDkeHEr_BDgS3Tm0hoDeGGWxSg'
        //'CONSENT=YES+DE.de+V14+BX; VISITOR_INFO1_LIVE=kYpNG7OoCbY; PREF=al=de&f4=4000000; SID=3geAZGdQt9hIJxt0ST2xySpK_6yaw0kvNarw6v9JTDpZQoKQ5FK1nYqc3dXGQzpM4GRWbA.; __Secure-3PSID=3geAZGdQt9hIJxt0ST2xySpK_6yaw0kvNarw6v9JTDpZQoKQ_zINvfbB7jPNTk2I3oTLYg.; HSID=ApvJR6aSSMIpzAioX; SSID=A4qjlas1kBmX90vX0; APISID=uKTdp7kEoR-Th5wk/Ajvd4cTFRNTvsnnPY; SAPISID=h6Tyds3npH_icpOT/Ae34WsO4j7jVpaLFp; __Secure-3PAPISID=h6Tyds3npH_icpOT/Ae34WsO4j7jVpaLFp; LOGIN_INFO=AFmmF2swRQIhAOZ3RDhhitXMYTD-meEWipRIFho5YaO05aGgteYU2w9SAiA-OKgaB64v_a2AWsOfiJk1JJW6miXXu64EibIGjReNdg:QUQ3MjNmeGs2UTRLWDVYNDNnUVNGRFQ0bThEeGl0ZVpJd2haQldweWpJbFNLTEMtNlJHRmJGTlE2SDc3Rkdyb282elprUllkQnRqc0RJYnNiUzhYNnJ3MENBYjNkcmo2dnFqTFNtMDJCTTJBdV9MMlNvYmdiS2xaOFZvUjFsTk5OX0xFZGQ2M2x1SFZKbEZFSFJ1Z3RXeUxfXzNGZmxsZTdkV3dFWFBOUElMN1B0T0pKemw2aU1F; YSC=hgmjViK_jxo; SIDCC=AJi4QfHbV2YQFgcCjOAOdQG0JWvpGtoxBGtAhNp3rJyU223hoL_CV6Aj3BrLOiQYlZEgVrCwg1I; __Secure-3PSIDCC=AJi4QfGrxA6SlqFGd46AK01jAKdxmwFHWC9u4uFW1t4dnB3lhPCZ-3Gr-Bv2E5LK55HMANtVMQ',
    },
  },
};

app.use(cors());
app.use(express.json());
app.use('/api', statisticRoutes);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => {
  res.status(200).send("API Is Working.");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("API Is Healthy.");
});

app.get('/suggestions', async (req, res) => {
  const { search } = req.query;
  const options = {
    q: search,
    part: 'snippet',
    type: 'video',
    maxResults: 6
  };
  db.collection('searchstatistics').insertOne({ searchInput: search });
  try {
    const data = await searchYoutube(process.env.YOUTUBE_KEY, options);
    const { items } = data;
    return res.status(200).json({ success: true, data: items });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

app.get('/metainfo', async (req, res) => {
  const { url } = req.query;
  if (!ytdl.validateID(url) && !ytdl.validateURL(url)) {
    return res
      .status(400)
      .json({ success: false, error: 'No valid YouTube ID!' });
  }
  try {
    const result = await ytdl.getInfo(url, reqOptions);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error });
  }
});

app.get('/watch', async (req, res) => {
  const { v: url, format: f = 'mp4' } = req.query;
  if (!ytdl.validateID(url) && !ytdl.validateURL(url)) {
    return res
      .status(400)
      .json({ success: false, error: 'No valid YouTube ID!' });
  }
  const formats = ['mp4', 'mp3', 'mov', 'flv'];
  let format = f;
  if (formats.includes(f)) {
    format = f;
  }
  try {
    const result = await ytdl.getBasicInfo(url, reqOptions);
    const {
      videoDetails: { title, videoId, uploadDate, likes, category, author },
    } = result;
    const videoInfo = {
      title,
      videoId,
      uploadDate,
      likes,
      category,
      authorId: author.id,
      downloadedFormat: format,
    };
    db.collection('downloadstatistics').insertOne(videoInfo);
    res.setHeader(
      'Content-disposition',
      contentDisposition(`${title}.${format}`)
    );
    ytdl(url, { format, ...reqOptions })
      .on('progress', (chunkLength, downloaded, total) => {
        // const download = (downloaded / 1024 / 1024).toFixed(2);
        // const tot = (total / 1024 / 1024).toFixed(2);
        // const progress = Math.ceil((download / tot) * 100);
        // console.log(`${download}MB of ${tot}MB\n`);
      })
      .pipe(res);
  } catch (err) {
    console.log('error ', err);
    res.redirect(`http://${req.headers.host}?error=downloadError`);
  }
});
