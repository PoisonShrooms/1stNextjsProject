import { mysqlTable, serial, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const proj1st_users = mysqlTable('proj1st_users', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
});
