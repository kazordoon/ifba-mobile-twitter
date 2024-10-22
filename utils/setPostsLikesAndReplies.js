import PapacapimAPI from '../services/PapacapimAPI';

export default async function setPostsLikesAndReplies(posts) {
  const postsLikesAndRepliesPromises = posts.map(async (post) => {
    const likes = await PapacapimAPI.getPostLikes(post.id);
    const replies = await PapacapimAPI.getPostReplies(post.id);

    post.likes = likes;
    post.replies = replies;

    post.likeNumbers = likes.length;
    post.replyNumbers = replies.length;
  });

  await Promise.all(postsLikesAndRepliesPromises);
}
