import Event from '../models/Event.js';

const createEvent = async (req, res) => {
  try {
    const { title, date, time, location, description, image } = req.body;

    const newEvent = new Event({
      title,
      date,
      time,
      location,
      description,
      image,
      createdBy: req.userId,
    });

    await newEvent.save();

    res.status(201).json({ msg: 'Event created successfully!', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to create event' });
  }
};

export { createEvent };
