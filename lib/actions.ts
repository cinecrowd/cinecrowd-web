"use server"

import { connectToDb } from '@/utils/connectDb';
import { Subscriber } from '@/models/Subscriber';

export const addSubscriber = async (prevState: any, email: any) => {
  try {
    await connectToDb();

    // Check if email exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return 'Mail already exists';
    }

    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    return 'Subscriber saved successfully';
  } catch (err) {
    console.error('Error adding subscriber:', err);
    return 'An error occurred while registering the subscriber';
  }
};