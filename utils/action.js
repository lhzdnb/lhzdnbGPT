"use server";
import OpenAI from "openai";
import prisma from "./db.ts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateChatResponse(chatMessages) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistance",
        },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function generateTourResponse({ city, country }) {
  const query = `Find ${city} in ${country}.
If ${city} and ${country} exist, create a list of things families can do in ${city},${country}. 
Once you have a list, create a one-day tour. Response should be in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
"stops" property should include only three stops.
If you can't find info on ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in ${country}, return { "tour": null }, with no additional characters.`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a tour guide",
        },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData = JSON.parse(response.choices[0].message.content);
    if (!tourData) {
      return null;
    }
    return tourData.tour;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getExistingTour({ city, country }) {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
}

export async function createNewTour(tour) {
  return prisma.tour.create({
    data: tour,
  });
}

export async function getAllTours(searchTerm) {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: { city: "asc" },
    });
    return tours;
  }
  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: { contains: searchTerm },
        },
        {
          country: { contains: searchTerm },
        },
      ],
    },
    orderBy: { city: "asc" },
  });
  return tours;
}
