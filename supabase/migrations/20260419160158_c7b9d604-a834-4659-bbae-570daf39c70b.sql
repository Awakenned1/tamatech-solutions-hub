CREATE TABLE public.consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  topic text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon visitors) may submit a consultation request.
CREATE POLICY "Anyone can submit a consultation request"
ON public.consultation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies => table is write-only from the public.
-- Reads happen via the service role from server code only.

CREATE INDEX idx_consultation_requests_created_at
ON public.consultation_requests (created_at DESC);