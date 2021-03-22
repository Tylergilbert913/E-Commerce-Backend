const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(eer)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try {
    const tagData = await Tag.findByPk({
      include: [{ model: ProductTag, Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'Category was not found with this ID' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);

  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  try {
    const tagData = await Tag.create();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(eer)
  }
  
  // create a new tag
});

router.put('/:id', (req, res) => {
  try {
    const tagData = await Tag.update({
      where: { id: req.params.id },
    });

    if (!tagData) {
      res.status(404).json({ message: 'The tag was not found with this ID!' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!tagData) {
      res.status(404).json({ message: 'The tag was not found with this ID!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };
  // delete on tag by its `id` value.
});

module.exports = router;
