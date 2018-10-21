package com.example.althea.fs_search.ui;
import com.example.althea.fs_search.ui.StoreAdaptor;
import com.example.althea.fs_search.R;
import com.example.althea.fs_search.model.Store;
import android.content.Context;
import android.support.annotation.NonNull;
import android.util.AttributeSet;
import android.widget.ListView;
import com.algolia.instantsearch.model.SearchResults;
import com.example.althea.fs_search.io.SearchResultsJsonParser;

import com.algolia.instantsearch.model.AlgoliaResultsListener;

import java.util.List;

public class ResultsListView extends ListView implements AlgoliaResultsListener {
        private final StoreAdaptor adapter;
        private SearchResultsJsonParser resultsParser = new SearchResultsJsonParser();

        public ResultsListView(final Context context, AttributeSet attrs) {
            super(context, attrs);
            setAdapter(adapter = new StoreAdaptor(context, R.layout.cell_store));
        }

    @Override public void onResults(@NonNull SearchResults results, boolean isLoadingMore) {
            if (!isLoadingMore) {
                List<Store> resultList = resultsParser.parseResults(results.content);
                adapter.clear();
                adapter.addAll(resultList);
                // Scroll the list back to the top.
                smoothScrollToPosition(0);
            } else {
                List<Store> resultList = resultsParser.parseResults(results.content);
                adapter.addAll(resultList);
            }
        }
    }
