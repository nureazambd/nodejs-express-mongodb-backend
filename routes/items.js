const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create an item
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get an item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an item
router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an item
router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search items
router.get('/search/:name', async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.params.name, 'i') });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
