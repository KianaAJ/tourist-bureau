# Tourist Bureau Activities Finder

1. Populate the Category dropdown (<select>) with options, by looping over the `categories` array. Use innerHTML to add options to the dropdown.
2. Write an **onchange event** listener which will detect when the user selects a category from the Category dropdown. When the onchange event takes place, we will...
3. Populate the Activity dropdown with options, by looping over the `activities` array and finding each activity which matches the Category selected by the user.
    - We will need an IF statement to compare the user's selected category to each activity's category. We will only add the activity to the Activity dropdown IF its category matches the one which the user is looking for.
    - Use innerHTML to add options to the dropdown.
4. Write an **onchange event** listener which will detect when the user selects a specific activity from the Activity dropdown. When the onchange event takes place, we will...
5. Add a Bootstrap card describing the selected activity on the page, within the DIV with the ID "selected-activity". Use innerHTML to add the card to the DIV.