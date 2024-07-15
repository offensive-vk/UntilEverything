// @ts-nocheck
import * as ytdl from 'ytdl-core';
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

async function downloadVideoAndAudio(youtubeUrl: string): Promise<void> {
    try {
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const videoFormats = ytdl.filterFormats(videoInfo.formats, 'videoonly');
        const audioFormats = ytdl.filterFormats(videoInfo.formats, 'audioonly');

        if (videoFormats.length === 0 || audioFormats.length === 0) {
            throw new Error('Video or audio format not found');
        }

        const videoStream = ytdl.downloadFromInfo(videoInfo, { format: videoFormats[0] });
        const audioStream = ytdl.downloadFromInfo(videoInfo, { format: audioFormats[0] });

        const videoFilePath = path.join(process.cwd(), `${videoInfo.videoId}.mp4`);
        const audioFilePath = path.join(process.cwd(), `${videoInfo.videoId}.mp3`);

        const videoFileWriteStream = fs.createWriteStream(videoFilePath);
        const audioFileWriteStream = fs.createWriteStream(audioFilePath);

        videoStream.pipe(videoFileWriteStream);
        audioStream.pipe(audioFileWriteStream);

        videoFileWriteStream.on('finish', () => console.log(`Video downloaded: ${videoFilePath}`));
        audioFileWriteStream.on('finish', () => console.log(`Audio downloaded: ${audioFilePath}`));
    } catch (error) {
        console.error('Error downloading video and audio:', error);
    }
}

// Example usage
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Example YouTube video URL
downloadVideoAndAudio(youtubeUrl);

export { }