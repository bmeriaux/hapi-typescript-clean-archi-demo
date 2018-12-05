import Server from "./infrastructure/server";

console.log(`Running environment ${process.env.NODE_ENV || "dev"}`);

//Starting Application Server
const init = async () => {

    await Server.start();
    console.log(`Server running at: ${Server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
