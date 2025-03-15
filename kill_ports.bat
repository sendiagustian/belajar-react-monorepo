@echo off
echo Clearing ports 5510-5514...
for /L %%p in (5510,1,5514) do (
    for /F "tokens=5" %%i in ('netstat -ano ^| findstr :%%p') do (
        echo Killing process on port %%p with PID %%i...
        taskkill /PID %%i /F >nul 2>&1
    )
)
echo Done!
pause
