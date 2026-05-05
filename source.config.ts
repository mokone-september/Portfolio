export type SourceEnvironment = "development" | "production";

export interface SourceConfig {
  appName: string;
  environment: SourceEnvironment;
  debug: boolean;
  apiBaseUrl: string;
  paths: {
    src: string;
    public: string;
    components: string;
    assets: string;
  };
  features: {
    enableBiome: boolean;
    enableLefthook: boolean;
  };
}

const sourceConfig: SourceConfig = {
  appName: "Portfolio",
  environment: (process.env.NODE_ENV as SourceEnvironment) || "development",
  debug: process.env.NODE_ENV !== "production",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.example.com",
  paths: {
    src: "./src",
    public: "./public",
    components: "./src/components",
    assets: "./src/assets",
  },
  features: {
    enableBiome: true,
    enableLefthook: true,
  },
};

export default sourceConfig;
