# Discord MC Tracker

A simple Discord bot to track the status of a custom Minecraft server and update the bot's presence based on that. It provides a `/status` slash command to check the server's current status directly in Discord.

## Features

-   Track Minecraft server's online players, version, and ping.
-   Display server's status (up/down) with a dynamic activity message on the bot.
-   `/status` command to get detailed information about the server.
-   Automatic updates of bot's status at regular intervals.

## Requirements

-   Node.js (v16 or above)
-   A Discord bot token (`DISCORD_TOKEN`)
-   A Discord bot client ID (`DISCORD_CLIENT_ID`)
-   A Minecraft server IP and port (`config.json`)

## Setup

1.  **Clone the repository:**
    
    ```bash
    git clone https://github.com/IliyaBadri/discord-mc-tracker.git
    cd discord-mc-tracker
    ```
    
2.  **Install dependencies:**
    
    ```bash
    npm install
    ```
    
3.  **Configure environment variables:** Create a `.env` file in the root of the project and add your Discord bot token:
    
    ```
    DISCORD_TOKEN="<your-discord-bot-token>"
    DISCORD_CLIENT_ID="<your-discord-client-id>"
    ```
    
4.  **Set up the Minecraft server details:** Update `config.json` with your server's IP, port, and other details:
    
    ```json
    {
      "server_ip": "your-minecraft-server-ip",
      "server_port": 25565
    }
    ```
    
6.  **Run the bot:** Start the bot with:
    
    ```bash
    node .
    ```
    

## Usage

-   Once the bot is online, it will automatically update its status based on the Minecraft server's information (e.g., playing status, number of players online).
-   You can check the Minecraft server's status by typing the `/status` command in any server the bot is a part of.

## Commands

-   **`/status`**: Displays the current status of the Minecraft server, including:
    -   Server IP & Port
    -   MOTD (Message of the Day)
    -   Server version
    -   Online players & Max players
    -   Server ping

## License

This project is licensed under the MIT License.

----------

Feel free to modify or enhance the bot as needed!
