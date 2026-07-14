@echo off
setlocal

pushd "%~dp0" || exit /b 1

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Install Node.js and npm, then run this script again.
  popd
  exit /b 1
)

call :install_project "." "workspace root"
if errorlevel 1 goto :failed

call :install_project "token-store" "TokenFlow landing page"
if errorlevel 1 goto :failed

call :install_project "token-store-video" "TokenFlow promo video"
if errorlevel 1 goto :failed

echo.
echo All dependencies are installed.
popd
exit /b 0

:install_project
if not exist "%~1\package.json" (
  echo Skipping %~2: package.json was not found.
  exit /b 0
)

echo.
echo Installing %~2 dependencies...
pushd "%~1" || exit /b 1
call npm install
set "install_status=%ERRORLEVEL%"
popd
exit /b %install_status%

:failed
echo.
echo Dependency installation failed.
popd
exit /b 1
