import { runMigrate } from "./migrate";

void (async () => {
	const migrationsFolder = process.argv[2];
	try {
		await runMigrate(migrationsFolder);
	} catch (err) {
		console.error("Migration process failed:", err);
		process.exit(1);
	}
})();
