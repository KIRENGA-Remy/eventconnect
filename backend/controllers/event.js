const router = require('express').Router();
const Event = require('../Models/event.js');
const mongoose = require('mongoose');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'username email');
    res.status(200).send(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Get a specific event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('organizer', 'username email');
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { 
      eventname, 
      description, 
      date, 
      startTime, 
      location, 
      categories, 
      ticketInfo, 
      eventimages 
    } = req.body;

    // Check for missing required fields
    if (!eventname ) {
      return res.status(400).send({ message: 'Missing required fields eventname' });
    }
    if (!description ) {
      return res.status(400).send({ message: 'Missing required fields descr' });
    }
    if ( !date ) {
      return res.status(400).send({ message: 'Missing required fields date' });
    }
    if ( !startTime ) {
      return res.status(400).send({ message: 'Missing required fields starttime' });
    }
    if (!location ) {
      return res.status(400).send({ message: 'Missing required fields location' });
    }
    if (  !ticketInfo ) {
      return res.status(400).send({ message: 'Missing required fields ticket' });
    }
    if ( !categories) {
      return res.status(400).send({ message: 'Missing required fields category' });
    }


    // Validate location fields
    const { address, city, state, country, postalCode } = location;
    if (!address || !city || !state || !country || !postalCode) {
      return res.status(400).send({ message: 'Missing required location fields' });
    }

    // Validate ticketInfo fields
    const { price, currency, availability } = ticketInfo;
    if (price == null || !currency || availability == null) {
      return res.status(400).send({ message: 'Missing required ticketInfo fields' });
    }

    // Extract user ID from the request (set by the auth middleware)
    const organizer = req.user._id;

    const existingEvent = await Event.findOne({
      eventname: eventname,
      date: date,
      startTime: startTime,
      organizer: new mongoose.Types.ObjectId(organizer) // Use 'new' keyword
    });

    if (existingEvent) {
      return res.status(400).json({ message: 'Event already exists' });
    }
    
    const event = new Event({
      eventname,
      description,
      date,
      startTime,
      location: {
        address,
        city,
        state,
        country,
        postalCode
      },
      categories,
      ticketInfo: {
        price,
        currency,
        availability
      },
      organizer,
      eventimages,
      attendees: [] // Initialize as empty
    });

    await event.save();
    res.status(201).send({ message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(500).send({ message: 'Internal Server Error', error: error.message });
  }
});

router.put('/:id/attendees', async (req, res) => {
  try {
    const eventId = req.params.id;
    const { userId, action } = req.body;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    if (action === 'add') {
      event.attendees.push({ user: userId });
    } else if (action === 'remove') {
      event.attendees = event.attendees.filter(attendee => attendee.user.toString() !== userId);
    }

    await event.save();
    res.status(200).send({ message: 'Attendees updated successfully', event });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});


// Update an existing event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, {
      eventname: req.body.eventname,
      description: req.body.description,
      date: req.body.date,
      startTime: req.body.startTime, // Include startTime
      location: {
        address: req.body.location.address,
        city: req.body.location.city,
        state: req.body.location.state,
        country: req.body.location.country,
        postalCode: req.body.location.postalCode
      },
      organizer: req.body.organizer,
      categories: req.body.categories,
      ticketInfo: {
        price: req.body.ticketInfo.price,
        currency: req.body.ticketInfo.currency,
        availability: req.body.ticketInfo.availability
      },
      eventimages: req.body.eventimages
    }, { new: true });

    if (!updatedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.status(200).send({ message: 'Event updated successfully', updatedEvent });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.status(200).send({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
