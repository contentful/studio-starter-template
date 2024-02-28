type ExternalVideoProps = {
  url: string;
  startAt: string;
  showPlayerControls: boolean;
  enablePrivacyEnhanceMode: boolean;
};
export function ExternalVideoComponent(props: ExternalVideoProps) {
  const {
    url,
    startAt,
    showPlayerControls,
    enablePrivacyEnhanceMode,
    ...studioProps
  } = props;

  const yUrl = getYoutubeIframeUrl(props);

  if (!yUrl) return <>Invalid url</>;

  return (
    <div {...studioProps}>
      <div className="relative w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={yUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

const getYoutubeIframeUrl = (props: ExternalVideoProps) => {
  const { url, startAt, showPlayerControls, enablePrivacyEnhanceMode } = props;
  if (!isYouTubeUrl(url)) return null;

  let query = '';
  var start = timeToSeconds(startAt);
  if (start > 0) {
    query = 'start=' + start;
  }
  if (showPlayerControls) {
    query = query ? query + '&controls=1' : 'controls=1';
  }
  const videoId = extractYouTubeID(url);
  const iframeUrl = enablePrivacyEnhanceMode
    ? `https://www.youtube-nocookie.com/embed/${videoId}?${query}`
    : `https://www.youtube.com/embed/${videoId}?${query}`;
  return videoId ? iframeUrl : null;
};

function isValidTimeFormat(time: string) {
  const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;
  return timeRegex.test(time);
}

function timeToSeconds(time: string) {
  if (!isValidTimeFormat(time)) {
    console.error('Invalid time format. Please use "hh:mm".');
    return 0; // or any value that indicates an error
  }

  // Split the time string into minutes and seconds
  const [minutes, seconds] = time.split(':').map(Number);

  // Calculate the total seconds
  const totalSeconds = minutes! * 60 + seconds;

  return totalSeconds;
}

function isYouTubeUrl(url: string) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return youtubeRegex.test(url);
}

function extractYouTubeID(url: string) {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
