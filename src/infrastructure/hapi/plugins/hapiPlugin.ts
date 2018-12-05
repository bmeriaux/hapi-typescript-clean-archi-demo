import * as Hapi from "hapi";
import { HapiPluginInfo } from "./hapiPluginInfo";

export interface HapiPlugin {
    register(server: Hapi.Server): Promise<void>;

    info(): HapiPluginInfo;
}