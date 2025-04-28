import Event from '../models/Event.js';

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, date, time, location, description, image } = req.body;
    const event = new Event({ title, date, time, location, description, image, createdBy: req.userId });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ msg: 'Error creating event', error: error.message });
  }
};

// Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name email');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching events', error: error.message });
  }
};

// Get Single Event
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching event', error: error.message });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ msg: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ msg: 'Error updating event', error: error.message });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });
    res.status(200).json({ msg: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting event', error: error.message });
  }
};
