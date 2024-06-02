"use server";

import { Redis } from "@upstash/redis";

export default async function contact(formData: FormData) {
  try {
    const redis = new Redis({
      url: "https://cosmic-possum-34727.upstash.io",
      token: "AYenAAIncDExM2I2NGQzMWQ4OWM0Y2Q4YThhMGYxMzIwMjNkODdlMnAxMzQ3Mjc",
    });

    const subject: string = formData.get("subject") as string;
    const body: string = formData.get("body") as string;

    if (subject && body) {
      const data = await redis.set(subject, body);
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
