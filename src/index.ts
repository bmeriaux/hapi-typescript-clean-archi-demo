import Server from "./infrastructure/server";

console.log(`Running environment ${process.env.NODE_ENV || "dev"}`);

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

//Starting Application Server
const init = async () => {
    try {
        await Server.start();
        console.info(`Server running at: ${Server.info.uri}`);
    } catch (error) {
        console.error("error while starting server", error);
    }
};

init();
