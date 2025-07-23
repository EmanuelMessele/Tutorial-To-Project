# this will it make it easier to interact with API's

import sys # now we can access the commmand line arguments like videoID from our JS
import json # so we can format whatever we want to return as a JSON
from youtube_transcript_api import YouTubeTranscriptApi

def main():
    # 1 geting our videoID
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No video ID provided"}))
        return
    
    videoID = sys.argv[1] # extracting the videoID
    
    ytapi = YouTubeTranscriptApi()
    transcript = ytapi.fetch(videoID)

    return transcript

main()