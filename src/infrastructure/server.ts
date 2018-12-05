import * as Hapi from "hapi";
import Routes from "./routes";
import * as path from "path";
import * as fs from "fs";
import { HapiPlugin } from "./hapi/plugins/hapiPlugin";

const server = new Hapi.Server({
    port: "8080",
    routes: {
        cors: true
    }
});

//  Setup Hapi Plugins
const pluginsPath = __dirname + '/libs/plugins/';
const plugins = fs.readdirSync(pluginsPath).filter(file => fs.statSync(path.join(pluginsPath, file)).isDirectory());

plugins.forEach((pluginName: string) => {
    const plugin: HapiPlugin = (require("./libs/plugins/" + pluginName)).default();
    console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
    plugin.register(server);
});

//Register Routes
Routes(server);

export default server;