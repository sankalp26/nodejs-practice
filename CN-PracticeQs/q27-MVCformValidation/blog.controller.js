// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  
  const {title, description, image} = req.body;
  let errorCount = 0;
  if(title==""||title.length<3){
    errorCount+=1;
  }
  if(description==""||description.length<10){
    errorCount+=1;
  }
  try {
    let validUrl = new URL(image);
  } catch (error) {
    errorCount+=1;
  }
  if(errorCount>0){
    res.status(401).render("addBlog", { errors: errorCount, success: false });
  }
  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
