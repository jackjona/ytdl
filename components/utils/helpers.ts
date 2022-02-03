export const isYtUrl = (url: string) => {
  const ytRegex = new RegExp(
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/g
  );
  return ytRegex.test(url);
};

export const host = 'https://backend.ytdl.cf';

export const thumbnailhost = 'https://i1.ytimg.com/vi/';
// Alternative host 'https://i.ytimg.com/vi/' and 'https://img.youtube.com/vi/

export const getDownloadUrl = (videoId: string, format = 'mp4') =>
  `${host}/watch?v=${videoId}&format=${format}`;

export const formats = [
  { text: 'MP4', format: '.mp4' },
  { text: 'MP3', format: '.mp3' },
  { text: 'MOV', format: '.mov' },
  { text: 'FLV', format: '.flv' },
];
