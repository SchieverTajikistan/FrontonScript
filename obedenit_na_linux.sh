#!/bin/bash

OUTPUT="frontolScript.js"
SRC_DIR="src"
PARTNERS_DIR="src/partners"
SEPARATOR="// *****************************************************************"

# Clear or create the output file
> "$OUTPUT"

# Main file first
cat "$SRC_DIR/main.js" >> "$OUTPUT"

# Then all partner files
for file in "$PARTNERS_DIR"/*.js; do
    echo "" >> "$OUTPUT"
    echo "$SEPARATOR" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    cat "$file" >> "$OUTPUT"
done

echo "Merged into $OUTPUT"
