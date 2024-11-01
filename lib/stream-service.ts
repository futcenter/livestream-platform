'use server'
import { db } from "@/lib/db";

export const getStreamByUserId = async (userId: string) => {
  const stream = await db.stream.findUnique({
    where: { userId },
  });

  return stream;
};

export const getOnLiveStrams = async () => {

  let streams = [];
  streams = await db.stream.findMany({
    where: {
      isLive: true
    },
    select: {
      id: true,
      user: true,
      isLive: true,
      name: true,
      thumbnailUrl: true,
    },
    orderBy: [
      {
        isLive: "desc",
      },
      {
        updatedAt: "desc",
      }
    ],
  });

  return streams;
};
