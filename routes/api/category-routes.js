const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(eer)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {

  try {
    const categoryData = await Category.findByPk({
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Category was not found with this ID' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);

  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(eer)
  }
  
  // create a new category

});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { model: Product },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(eer)
  }
  // update a category by its `id` value;
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Category was not found with this ID!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
