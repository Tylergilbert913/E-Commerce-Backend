const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {

  try {
    const categoryData = await Category.findByPk({
      include: [{ model: Product }],
    });

  } catch {

   }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  try {

  } catch {

   }
  // create a new category

});

router.put('/:id', (req, res) => {
  try {

  } catch {

   }
  // update a category by its `id` value;
});

router.delete('/:id', (req, res) => {
  try {

  } catch {

   }
  // delete a category by its `id` value
});

module.exports = router;
