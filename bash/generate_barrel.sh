#!/bin/bash

generate_barrel_file() {
  local folder="$1"
  local barrel_file="$folder/index.ts"

  # Remove existing barrel file
  rm -f "$barrel_file"

  # Generate new barrel file
  echo "// Generated index.ts file" > "$barrel_file"

  # Check if folder contains subdirectories
  if [ "$(ls -d "$folder"/*/ 2>/dev/null)" ]; then
    # Loop through subdirectories
    for dir in "$folder"/*; do
      if [ -d "$dir" ]; then
        dir_name=$(basename "$dir")
        echo "export * from './$dir_name';" >> "$barrel_file"
        generate_barrel_file "$dir"  # Recursively call the function for subfolders
      fi
    done
  else
    # Add export statement for current folder
    echo "export * from './$(basename "$folder")';" >> "$barrel_file"
  fi

  echo "Generated index.ts file at $barrel_file"
}

folder="$1"

# Check if folder is provided
if [ -z "$folder" ]; then
  echo "Error: No folder provided."
  echo "Usage: ./generate_barrel.sh <folder>"
  exit 1
fi

# Check if folder exists
if [ ! -d "$folder" ]; then
  echo "Error: Folder '$folder' does not exist."
  exit 1
fi

# Generate barrel files recursively
generate_barrel_file "$folder"