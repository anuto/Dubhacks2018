package com.example.althea.fs_search.ui;

import android.os.Bundle;
import android.widget.AbsListView;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import com.example.althea.fs_search.R;
import com.algolia.search.saas.Client;
import com.algolia.instantsearch.helpers.Searcher;
import com.algolia.instantsearch.helpers.InstantSearch;
import com.algolia.search.saas.Query;

public class StoreSearchActivity extends AppCompatActivity implements AbsListView.OnScrollListener  {

    private static final int HITS_PER_PAGE = 20;
    private static final int LOAD_MORE_THRESHOLD = 5;


    private ResultsListView storeListView;
    private Searcher searcher;
    private InstantSearch helper;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_store);

        // Bind UI components.
        (storeListView = (ResultsListView) findViewById(R.id.listview_stores)).setOnScrollListener(this);
//
//        // Init Algolia.
        Client client = new Client("96JAIT9AVT", "407d8d1c10fc9e319846a7324f4aeddf\n");
        searcher = Searcher.create(client.getIndex("SNAP_stores"));
        helper = new InstantSearch(storeListView, searcher);

        // Pre-build query.
        searcher.setQuery(new Query().setAttributesToRetrieve("Store_Name", "Longitude", "Latitude",
                "Address", "Address Line #2", "City", "State", "Zip5", "Zip4", "County", "objectID")
                .setHitsPerPage(HITS_PER_PAGE));
    }

    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_store_search, menu);
        // Configure search view.
        helper.registerSearchView(this, menu, R.id.search);
        return true;
    }

    public void onScrollStateChanged(AbsListView view, int scrollState) {
        // N/A
    }

    public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount,
                         int totalItemCount) {
        // Abort if list is empty or the end has already been reached.
        if (totalItemCount == 0 || !searcher.hasMoreHits()) {
            return;
        }

        // Load more if we are sufficiently close to the end of the list.
        int firstInvisibleItem = firstVisibleItem + visibleItemCount;
        if (firstInvisibleItem + LOAD_MORE_THRESHOLD >= totalItemCount) {
            searcher.loadMore();
        }
    }
}
