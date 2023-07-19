import { Loader } from "@googlemaps/js-api-loader";
import { theme } from "../../config";

export const loader = new Loader({
    
    apiKey: theme.key_google_maps as string,
    version: "weekly",
    libraries: ["places"],
});