import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

const container = new Container({defaultScope: "Singleton"});
container.load(buildProviderModule());

export default container;