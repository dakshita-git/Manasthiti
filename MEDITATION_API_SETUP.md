# Meditation Timer - API Setup Guide

## Overview

The Meditation Timer feature uses the **Freesound API** to fetch ambient nature sounds for meditation sessions.

## Features Implemented

### 1. **Breathing Techniques**

- **Box Breathing**: 4-4-4-4 pattern (inhale-hold-exhale-hold)
- **4-7-8 Breathing**: Relaxing technique for sleep
- **Calm Breathing**: Simple 4-6 pattern

### 2. **Ambient Sounds**

- Rain Forest 🌧️
- Ocean Waves 🌊
- Forest Birds 🌲
- Wind Chimes 🍃
- Water Stream 💧

### 3. **Customizable Sessions**

- Duration: 3, 5, 10, 15, or 20 minutes
- Visual breathing guide with animated circle
- Real-time countdown timer
- Pause/Resume/Stop controls

## Getting Freesound API Key (Free)

### Step 1: Create Account

1. Go to [https://freesound.org](https://freesound.org)
2. Click "Register" in the top right
3. Fill in your details and verify your email

### Step 2: Get API Key

1. Log in to your Freesound account
2. Go to [https://freesound.org/apiv2/apply](https://freesound.org/apiv2/apply)
3. Fill out the API application form:
   - **Name**: Share Talk Heal - Meditation Timer
   - **Description**: Mental health support platform with meditation features
   - **URL**: Your website URL (or localhost for development)
4. Accept the terms and submit
5. You'll receive your API key immediately

### Step 3: Add API Key to Project

1. Open `src/pages/MeditationPage.js`
2. Find line 73 (the fetch call)
3. Replace `YOUR_API_KEY` with your actual API key:

```javascript
const response = await fetch(
  `https://freesound.org/apiv2/search/text/?query=${soundQuery}&filter=duration:[30 TO 600]&fields=id,name,previews&token=YOUR_ACTUAL_API_KEY_HERE`
);
```

## Alternative: Use Local Audio Files

If you prefer not to use the API, you can use local audio files:

### Option 1: Free Sound Libraries

- [Freesound.org](https://freesound.org) - Download sounds manually
- [Zapsplat](https://www.zapsplat.com) - Free sound effects
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk) - Free archive

### Option 2: Implement Local Files

1. Create a `public/sounds` folder
2. Add your audio files (rain.mp3, ocean.mp3, etc.)
3. Update the code in `MeditationPage.js`:

```javascript
const soundFiles = {
  rain: "/sounds/rain.mp3",
  ocean: "/sounds/ocean.mp3",
  forest: "/sounds/forest.mp3",
  wind: "/sounds/wind.mp3",
  stream: "/sounds/stream.mp3",
};

// In the fetchAmbientSound function, replace with:
setAmbientSound(soundFiles[soundType]);
```

## How It Works

1. **User selects settings**: Duration, breathing technique, and ambient sound
2. **Clicks "Start Session"**: Timer begins countdown
3. **API call**: Fetches the selected ambient sound from Freesound
4. **Breathing animation**: Circle expands/contracts based on selected technique
5. **Audio plays**: Ambient sound loops in the background
6. **Visual guidance**: Text shows "Breathe In", "Hold", "Breathe Out"
7. **Session ends**: Timer reaches 0, or user clicks "Stop"

## API Rate Limits

Freesound API (Free Tier):

- **Rate Limit**: 60 requests per minute
- **Daily Limit**: 2000 requests per day
- **Cost**: FREE

This is more than enough for a meditation app since sounds are cached after the first fetch.

## Testing Without API

The app will work without the API key, but:

- No ambient sounds will play
- All other features (timer, breathing guide, animations) work perfectly
- You can still test the full meditation experience

## Future Enhancements

Potential additions:

- Save favorite sound combinations
- Track meditation history
- Add guided meditation voice-overs
- Integrate with Spotify for music meditation
- Add binaural beats option
- Progress statistics and streaks

## Troubleshooting

**Issue**: "API key not working"

- Check if you copied the full key
- Verify your Freesound account is verified
- Check browser console for error messages

**Issue**: "Sounds not playing"

- Check browser audio permissions
- Try a different browser
- Verify internet connection
- Check if audio element is properly loaded

**Issue**: "CORS errors"

- Freesound API supports CORS by default
- If issues persist, consider using a proxy server

## Support

For issues or questions:

- Freesound API Docs: [https://freesound.org/docs/api/](https://freesound.org/docs/api/)
- Freesound Forum: [https://freesound.org/forum/](https://freesound.org/forum/)

---

**Note**: The meditation timer works perfectly without the API - the ambient sounds are an enhancement, not a requirement!
