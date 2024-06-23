import {Router, Request, Response} from "express"
const router = Router();

router.get("/posts", (req: Request, res: Response) => {

});

router.get("/:userId/posts", (req: Request, res: Response) => {

});

/* auth middleware required */
// create an empty post
router.post("/:postId", (req: Request, res: Response) => {
  
});

// update a post
router.put("/:postId", (req: Request, res: Response) => {

});

// delete a post
router.delete("/:postId", (req: Request, res: Response) => {

});

export default router;
