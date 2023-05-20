import { TaskExecutor } from "yajsapi";

async function tts(text, filename) {
    const executor = await TaskExecutor.create({
        package: "1e88943d64a9175ab9855ebb2d628b4728b6656b2730541899d15b63",
        maxParallelTasks: 16,
        budget: 10
    });
    await executor.run(async (ctx) => {
        await ctx.beginBatch()
            .run(
                `espeak "${text}" -v "en" -s 150 -p 50 -a 200 -g 10 -w /golem/output/result.wav && ffmpeg -i /golem/output/result.wav /golem/output/result.mp3`
            ).end();
        await ctx.downloadFile("/golem/output/result.mp3", `output/result-${filename}.mp3`);
        return;
    });
    await executor.end();
}

export default tts;
