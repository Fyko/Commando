/* eslint-disable no-unused-vars, valid-jsdoc */
const Guild = require('discord.js').Guild;

/**
 * Loads and stores settings associated with guilds
 * @abstract
 */
class SettingProvider {
	/**
	 * Initialises the provider by connecting to databases and/or caching all data in memory.
	 * @return {Promise<void>}
	 * @abstract
	 */
	init() { throw new Error(`${this.constructor.name} doesn't have an init method.`); }

	/**
	 * Sets a setting for a guild
	 * @param {Guild|string} guild Guild to associate the setting with (or 'global')
	 * @param {string} key Name of the setting
	 * @param {*} val Value of the setting
	 * @return {Promise<void>}
	 * @abstract
	 */
	set(guild, key, val) { throw new Error(`${this.constructor.name} doesn't have a set method.`); }

	/**
	 * Obtains the setting for a guild
	 * @param {Guild|string} guild Guild the setting is associated with (or 'global')
	 * @param {string} key Name of the setting
	 * @param {*} [defVal] Value to default to if the setting isn't set on the guild
	 * @return {*}
	 * @abstract
	 */
	get(guild, key, defVal = null) { throw new Error(`${this.constructor.name} doesn't have a get method.`); }

	/**
	 * Removes a setting from a guild
	 * @param {Guild|string} guild Guild the setting is associated with (or 'global')
	 * @param {string} key Name of the setting
	 * @return {Promise<boolean>} Whether the setting actually existed and was removed
	 * @abstract
	 */
	remove(guild, key) { throw new Error(`${this.constructor.name} doesn't have a remove method.`); }

	/**
	 * Removes all settings in a guild
	 * @param {Guild|string} guild Guild to clear the settings of
	 * @return {Promise<void>}
	 * @abstract
	 */
	clear(guild) { throw new Error(`${this.constructor.name} doesn't have a clear method.`); }

	/**
	 * Obtains the ID of the provided guild, or throws an error if it isn't valid
	 * @param {Guild|string} guild Guild to get the ID of
	 * @return {string} ID of the guild, or 'global'
	 */
	static getGuildID(guild) {
		if(guild instanceof Guild) return guild.id;
		if(guild === 'global') return 'global';
		if(typeof guild === 'string' && !isNaN(guild)) return guild;
		throw new TypeError('Invalid guild specified. Must be a Guild instance, guild ID, or "global".');
	}
}

module.exports = SettingProvider;
