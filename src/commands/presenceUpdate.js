import { AttachmentBuilder } from "discord.js";

export function execute(oldPresence, newPresence) {
    if (
        newPresence.guild.id !== "941366925114605580" ||
        newPresence.user.id !== "251192610645999617"
    ) {
        return;
    }

    if (
        newPresence.activities.length > 0 &&
        oldPresence.activities.length === 0
    ) {
        const activity = newPresence.activities[0];

        if (activity.type === 0 && activity.name === "NIKKE") {
            // User started playing the game
            const attachment = new AttachmentBuilder("C:\\Programming\\javascript\\discord-bots-project\\marci-bot\\src\\videos\\half-life.gif");
            const channel =
                newPresence.guild.channels.cache.get("941366925643120682");
            if (channel) {
                channel.send({
                    content: `${newPresence.user.username} started playing ${activity.name}`,
                    files: [attachment],
                });
            }
        }
    }
}
