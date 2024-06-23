// getPosts: GET get all the post
// getPostsByUser: GET get all the post of an user
// postPost: POST a new post (auth required)
// updatePost: PUT update a new post (auth required)
// deletePost: DELETE delete a post (auth required)

import { Router } from "express"
export const postsRouter = Router();

postsRouter.get("/posts",);

postsRouter.get("/:userId/posts",);

// auth middleware required
postsRouter.post("/:postId",);

postsRouter.put("/:postId",);

postsRouter.delete("/:postId",);
