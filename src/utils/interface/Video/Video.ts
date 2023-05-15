import VideoSnippet from "./VideoSnippet/VideoSnippet";

export default interface Video {
  kind: String;
  id: String;
  snippet: VideoSnippet;
}
