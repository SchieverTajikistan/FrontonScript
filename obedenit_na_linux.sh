#!/bin/bash

OUTPUT="frontolScript.js"
SRC_DIR="src"
PARTNERS_DIR="src/partners"
SEPARATOR="// *****************************************************************"

# Files to ignore (add filenames to skip them)
IGNORE_FILES=(
    # 'Alif.js',
    # 'DushanbeCity.js',
)

# Clear or create the output file
> "$OUTPUT"

# Main file first
cat "$SRC_DIR/main.js" >> "$OUTPUT"

# Then all partner files
for file in "$PARTNERS_DIR"/*.js; do
    filename=$(basename "$file")
    skip=false
    for ignored in "${IGNORE_FILES[@]}"; do
        if [[ "$filename" == "$ignored" ]]; then
            skip=true
            break
        fi
    done
    if $skip; then
        continue
    fi
    echo "" >> "$OUTPUT"
    echo "$SEPARATOR" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
    cat "$file" >> "$OUTPUT"
done

echo "Merged into $OUTPUT"
