const express = require('express');
const router = express.Router();
const Taskdos = require('./taskdos.model');


router.get('/', async (req, res) => {
  const tasksdos = await Taskdos.find();
  res.json(tasksdos);
  //res.render('index', {
   //tasks
  //});
});

router.post('/adddos', async (req, res, next) => {
  const {  name, title, image, description, price, amount } = req.body;
  const task = new Taskdos({name, title, image, description, price, amount});
  //const task = new Taskdos(req.body);
  console.log(req.body)
  await task.save();
  res.redirect('/');
});


// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Taskdos.findById(req.params.id);
  res.json(task);
});


router.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    await Taskdos.deleteOne({_id: id});
    res.redirect('/');
  });


// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { name, title, image, description, price, amount } = req.body;
  const newTask = {name, title, image, description, price, amount};
  await Taskdos.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});
  

 

  router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Taskdos.update({_id: id}, req.body);
    res.redirect('/');
  }); 

module.exports = router;
