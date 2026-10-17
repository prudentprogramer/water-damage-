@echo off
setlocal
cd /d "%~dp0"
echo Starting HomeWaterConnect preview from the correct website folder...
where py >nul 2>nul
if %errorlevel%==0 (
  start "HomeWaterConnect Preview Server" cmd /k "cd /d ""%~dp0"" && py -m http.server 8017"
) else (
  where python >nul 2>nul
  if %errorlevel%==0 (
    start "HomeWaterConnect Preview Server" cmd /k "cd /d ""%~dp0"" && python -m http.server 8017"
  ) else (
    echo Python was not found. You can still try double-clicking index.html.
    pause
    exit /b 1
  )
)
timeout /t 2 /nobreak >nul
start "" "http://localhost:8017/index.html"
echo Homepage opened in your browser. Keep the server window open while testing.
endlocal
