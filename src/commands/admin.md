# Admin Commands

::: danger
These commands can be only be used by members who have **ManageServer** permission
:::


## Set Prefix

* **Description**: Set bot's prefix
* **Usage**: `!setprefix <newPrefix>`

## Automod Configuration

| Name                                     |    Description                                                    |
|----------------------------------------  | ---------------------------------------------------------------|
| **!automod status**                      | view configuration status                                      |
| **!automod strikes `<amount>`**          | Set the maximum number of strikes before taking an action      |
| **!automod action `<kick\|mute\|ban>`**  | Set the action to be performed after receiving maximum strikes |
| **!automod debug `<on\|off>`**           | turns on automod for messages sent by admins and moderators    |
| **!automod whitelist**                   | view all whitelisted channels (all are whitelisted by default) |
| **!automod whitelistadd `<channel>`**    | add a channel to the whitelist                                 |
| **!automod whitelistremove `<channel>`** | remove a channel from the whitelist                            |

::: warning
By default, Auto moderation events are ignored for members who have the following permissions since they are assumed to be channel/server moderators

**KickMembers**, **BanMembers**, **ManageGuild**, **ManageMessages**

`!automodoconfig debug on` to disable this
:::

## Autodelete

| Name                                   | Description                                             |
|----------------------------------------|---------------------------------------------------------|
| **!autodelete attachments `on/off`**   | Allow or disallow attachments in messages               |
| **!autodelete invites `on/off`**       | Allow or disallow sending discord invites in messages   |
| **!autodelete links `on/off`**         | Allow or disallow sending links in messages             |
| **!autodelete maxlines `number`**      | Sets maximum lines allowed per message [0 to disable]   |

::: warning
Each time a member tries to break the automated rule, he/she **receives a strike**. After receiving the maximum number of strikes (default 5), the moderation action (default TIMEOUT) is performed on them
:::

## Anti
| Name                                          | Description
|-----------------------------------------------|-------------------------------------------------------|
| **!anti ghostping `<on/off>`**                | logs ghost mentions in the server (Requires `/modlog` channel to be setup)                                                                                    |
| **!anti spam `<on/off>`**                     | Stops users from spamming messages.                   |
| **!anti massmention `<on/off>` [threshold]**  | Stops users from mass mentioning                      |

## Counter Channels

* **Description:** setup counter channel in the guild
* **Usage**: `!counter <counter_type> <name>`
* **Available counters** **types**
  * USERS: counts the total server member count (members + bots)
  * MEMBERS: counts the total member count
  * BOTS: counts the total number of bots

## Max Warn

* **!maxwarn limit `<amount>`**: set max warnings a member can receive before taking an action
* **!maxwarn action `<timeout|kick|ban>`**: set the action to be performed after receiving maximum warnings

## Flag Translations

_Enabling this feature will allow members to simply react to any message with a country flag emoji, translating that message content to regional language_

* **Description**: configure flag translation in the server
* **Usage**: `!flagtr <on|off>`

## Moderation Logging

* **Description**: enable or disable moderation logs
* **Usage**: `!modlog <channel|off>`

::: warning 
Moderation logging enable logging of all **moderation actions** and **automod events**
:::

## Stats System

* **Description**: configure the stats system in the server
* **Usage**: `!statstracking <on|off>`

## XP system 
| Command | Description |
| ------- | ----------- |
| **!xp message `<new-message>`** | set custom level up message |
| **!xp channel `<#channel\|off>`** | set the channel to send level up messages to

## Greeting

Here are all `welcome/farewell` commands and **Allowed Content Replacements**

### Welcome

| Command                             | Description                                             |
| ------------------------------------|---------------------------------------------------------|
| **!welcome status `<on/off>`**      | enable or disable welcome message                       |
| **!welcome channel `<#channel>`**   | configure channel where welcome messages must be sent   |
| **!welcome preview**                | send a welcome preview                                  |
| **!welcome desc `<content>`**       | set welcome embed description                           |
| **!welcome footer `<content>`**     | set welcome embed footer                                |
| **!welcome thumbnail `<on/off>`**   | enable or disable welcome message thumbnail             |
| **!welcome color `<#hex>`**         | set welcome embed color                                 |
| **!welcome image `<url>`**          | set welcome image at the bottom of the embed            |

### Farewell

| Command                             | Description                                             |
| ------------------------------------|---------------------------------------------------------|
| **!farewell status `<on/off>`**     | enable or disable farewell message                      |
| **!farewell channel `<#channel>`**  | configure channel where farewell messages must be sent  |
| **!farewell preview**               | send a welcome preview                                  |
| **!farewell desc `<content>`**      | set farewell embed description                          |
| **!farewell footer `<content>`**    | set farewell embed footer                               |
| **!farewell thumbnail `<on/off>`**  | enable or disable farewell message thumbnail            |
| **!farewell color `<#hex>`**        | set farewell embed color                                |
| **!farewell image `<url>`**         | set farewell image at the bottom of the embed           |

::: tip Allowed Content Replacements
* \n : New Line&#x20;
* {server} : Server Name&#x20;
* {count} : Server member count&#x20;
* {member:name} : Member Name&#x20;
* {member:tag} : Member Tag&#x20;
* {inviter:name} : Inviter Name&#x20;
* {inviter:tag} : Inviter Tag&#x20;
* {invites} : Inviter Invites
:::

## Reaction Roles

### Create Reaction Role

* **Usage**: !addrr <#channel> \<messageId> \<role> \<emote>
* **Description**: setup reaction role for the specified message

### Remove Reaction Roles

* **Usage**: !removerr <#channel> \<messageId>
* **Description**: remove configured reaction for the specified message


## And thats all for Admin Commands!