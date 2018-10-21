package com.example.althea.FS_search_food.ui;
import com.example.althea.FS_search_food.R;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.AttributeSet;
import android.widget.ListView;
import com.algolia.instantsearch.model.SearchResults;
import com.example.althea.FS_search_food.io.SearchResultsJsonParser;

import com.algolia.instantsearch.model.AlgoliaResultsListener;
import com.example.althea.FS_search_food.model.Food;

import java.util.List;

public class ResultsListView extends ListView implements AlgoliaResultsListener {
        private final FoodAdaptor adapter;
        private SearchResultsJsonParser resultsParser = new SearchResultsJsonParser();

        public ResultsListView(final Context context, AttributeSet attrs) {
            super(context, attrs);
            setAdapter(adapter = new FoodAdaptor(context, R.layout.cell_food));
        }

    @Override public void onResults(@NonNull SearchResults results, boolean isLoadingMore) {
            if (!isLoadingMore) {
                List<Food> resultList = resultsParser.parseResults(results.content);
                adapter.clear();
                adapter.addAll(resultList);
                // Scroll the list back to the top.
                smoothScrollToPosition(0);
            } else {
                List<Food> resultList = resultsParser.parseResults(results.content);
                adapter.addAll(resultList);
            }
        }
    }
