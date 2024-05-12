import TweetStyles from "./Tweet.module.css";
import Icons from "../icons/Icons";

export default function Tweet() {
  return (
    <div className={TweetStyles.tweet}>
      <div className={TweetStyles.tweet__avatar}>
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className={TweetStyles.tweet__body}>
        <div className={TweetStyles.tweet__header}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <p style={{ fontWeight: "bold", color: "white" }}>Gabriel</p>
            <p>@gabby</p>
            <p>•1hr</p>
          </div>
          <Icons.VerticalEllipsis />
        </div>
        <div className={TweetStyles.tweet__text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit
        </div>
        <div className={TweetStyles.tweet__footer}>
          <div className={TweetStyles.tweet__reactions}>
            <div>
              <Icons.ChatBubble />
              <small>457</small>
            </div>
            <div>
              <Icons.Repeat />
              <small>1.2k</small>
            </div>
            <div>
              <Icons.Heart />
              <small>22.7k</small>
            </div>
            <div>
              <Icons.Analytics />
              <small>1.2k</small>
            </div>
          </div>
          <div className={TweetStyles.tweet__actions}>
            <div>
              <Icons.Bookmark />
            </div>
            <div>
              <Icons.Share />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
