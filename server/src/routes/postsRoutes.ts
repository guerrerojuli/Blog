// getPosts: GET get all the post
// getPostsByUser: GET get all the post of an user
// postPost: POST a new post (auth required)
// updatePost: PUT update a new post (auth required)
// deletePost: DELETE delete a post (auth required)

import {Router, Request, Response} from "express"
const router = Router();

router.get("/posts", (req: Request, res: Response) => {

});

router.get("/:userId/posts", (req: Request, res: Response) => {

});

// auth middleware required
router.post("/:postId", (req: Request, res: Response) => {
  
});

router.put("/:postId", (req: Request, res: Response) => {

});

router.delete("/:postId", (req: Request, res: Response) => {

});

export default router;
