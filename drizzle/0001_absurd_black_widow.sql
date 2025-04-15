ALTER TABLE "post" ALTER COLUMN "updated_at" SET DEFAULT current_timestamp;--> statement-breakpoint
ALTER TABLE "post" ADD COLUMN "published" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "updated_at" timestamp DEFAULT current_timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_slug_unique" UNIQUE("slug");