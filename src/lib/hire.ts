import { Redis } from "@upstash/redis";

export default async function hire(formData: FormData) {
  try {
    const redis = new Redis({
      url: "https://cosmic-possum-34727.upstash.io",
      token: "AYenAAIncDExM2I2NGQzMWQ4OWM0Y2Q4YThhMGYxMzIwMjNkODdlMnAxMzQ3Mjc",
    });

    const email = formData.get("email") as string;

    if (email) {
      const data = await redis.set(`email:${new Date().toISOString()}`, email);
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
