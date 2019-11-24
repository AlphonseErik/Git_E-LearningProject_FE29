import axios from "axios";
import { settings } from "../config/settings";

export const restConnector = axios.create({
    baseURL: settings.domain
});